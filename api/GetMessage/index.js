module.exports = async function (context, req) {
  const date = "2023-08-17T15:08:20.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

