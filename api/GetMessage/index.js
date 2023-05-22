module.exports = async function (context, req) {
  const date = "2023-05-22T06:12:04.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

