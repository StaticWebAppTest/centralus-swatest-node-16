module.exports = async function (context, req) {
  const date = "2023-05-09T00:48:49.006Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

