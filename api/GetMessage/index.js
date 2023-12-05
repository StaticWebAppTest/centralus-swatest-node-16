module.exports = async function (context, req) {
  const date = "2023-12-05T08:12:24.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

