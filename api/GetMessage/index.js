module.exports = async function (context, req) {
  const date = "2022-06-12T14:08:50.524Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

