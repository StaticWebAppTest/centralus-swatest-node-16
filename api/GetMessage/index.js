module.exports = async function (context, req) {
  const date = "2022-06-02T15:11:56.524Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

