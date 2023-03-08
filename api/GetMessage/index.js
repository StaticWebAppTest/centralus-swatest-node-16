module.exports = async function (context, req) {
  const date = "2023-03-08T19:08:20.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

