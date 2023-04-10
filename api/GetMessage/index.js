module.exports = async function (context, req) {
  const date = "2023-04-10T15:07:41.524Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

