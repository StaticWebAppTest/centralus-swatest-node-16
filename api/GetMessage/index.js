module.exports = async function (context, req) {
  const date = "2022-03-15T12:17:10.524Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

