module.exports = async function (context, req) {
  const date = "2024-05-13T21:10:41.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

