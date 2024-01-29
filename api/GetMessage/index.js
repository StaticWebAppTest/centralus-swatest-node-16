module.exports = async function (context, req) {
  const date = "2024-01-29T04:10:35.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

