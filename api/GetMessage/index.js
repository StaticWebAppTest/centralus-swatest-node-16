module.exports = async function (context, req) {
  const date = "2023-09-04T19:06:43.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

