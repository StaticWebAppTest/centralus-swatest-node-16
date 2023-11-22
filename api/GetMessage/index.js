module.exports = async function (context, req) {
  const date = "2023-11-22T06:12:48.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

