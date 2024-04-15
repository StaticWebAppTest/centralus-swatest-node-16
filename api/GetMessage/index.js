module.exports = async function (context, req) {
  const date = "2024-04-15T15:10:33.524Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

