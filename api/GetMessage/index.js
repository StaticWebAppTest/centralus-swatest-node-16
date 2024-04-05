module.exports = async function (context, req) {
  const date = "2024-04-05T18:11:41.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

