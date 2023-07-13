module.exports = async function (context, req) {
  const date = "2023-07-13T20:10:41.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

