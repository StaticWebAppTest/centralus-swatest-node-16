module.exports = async function (context, req) {
  const date = "2024-12-17T07:12:39.524Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

