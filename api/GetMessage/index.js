module.exports = async function (context, req) {
  const date = "2023-12-05T13:12:49.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

