module.exports = async function (context, req) {
  const date = "2023-12-05T06:12:29.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

