module.exports = async function (context, req) {
  const date = "2024-07-12T02:32:01.524Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

