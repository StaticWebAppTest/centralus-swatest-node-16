module.exports = async function (context, req) {
  const date = "2024-12-30T13:18:44.524Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

