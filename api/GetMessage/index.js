module.exports = async function (context, req) {
  const date = "2024-09-12T15:11:30.524Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

