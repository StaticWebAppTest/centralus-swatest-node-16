module.exports = async function (context, req) {
  const date = "2024-09-04T12:21:22.524Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

