module.exports = async function (context, req) {
  const date = "2023-01-05T08:12:57.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

