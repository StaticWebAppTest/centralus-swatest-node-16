module.exports = async function (context, req) {
  const date = "2024-01-05T16:10:36.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

