module.exports = async function (context, req) {
  const date = "2023-05-08T12:17:22.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

