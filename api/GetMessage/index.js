module.exports = async function (context, req) {
  const date = "2023-01-25T16:12:49.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

