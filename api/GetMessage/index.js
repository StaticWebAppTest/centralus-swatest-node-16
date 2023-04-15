module.exports = async function (context, req) {
  const date = "2023-04-15T08:10:29.524Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

