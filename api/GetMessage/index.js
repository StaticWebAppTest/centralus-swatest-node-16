module.exports = async function (context, req) {
  const date = "2023-08-16T23:08:14.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

