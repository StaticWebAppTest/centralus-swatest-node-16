module.exports = async function (context, req) {
  const date = "2023-11-09T12:16:39.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

