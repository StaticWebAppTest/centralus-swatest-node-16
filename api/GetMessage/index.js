module.exports = async function (context, req) {
  const date = "2023-05-25T13:12:41.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

