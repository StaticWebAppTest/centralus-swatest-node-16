module.exports = async function (context, req) {
  const date = "2024-05-13T16:13:54.840Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

