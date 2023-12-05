module.exports = async function (context, req) {
  const date = "2023-12-05T19:06:56.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

