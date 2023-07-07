module.exports = async function (context, req) {
  const date = "2023-07-07T09:10:06.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

