module.exports = async function (context, req) {
  const date = "2023-12-21T12:16:38.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

