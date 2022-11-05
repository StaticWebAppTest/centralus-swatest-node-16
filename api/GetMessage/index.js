module.exports = async function (context, req) {
  const date = "2022-11-05T03:16:06.524Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

