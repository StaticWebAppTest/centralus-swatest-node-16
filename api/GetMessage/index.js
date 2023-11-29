module.exports = async function (context, req) {
  const date = "2023-11-29T06:12:22.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

