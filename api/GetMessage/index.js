module.exports = async function (context, req) {
  const date = "2024-05-16T21:09:57.840Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

