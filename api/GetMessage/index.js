module.exports = async function (context, req) {
  const date = "2023-07-05T08:13:49.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

