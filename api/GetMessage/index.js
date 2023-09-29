module.exports = async function (context, req) {
  const date = "2023-09-29T12:16:30.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

