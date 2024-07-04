module.exports = async function (context, req) {
  const date = "2024-07-04T05:11:41.524Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

