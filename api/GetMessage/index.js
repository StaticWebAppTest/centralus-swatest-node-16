module.exports = async function (context, req) {
  const date = "2022-11-23T10:11:20.524Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

