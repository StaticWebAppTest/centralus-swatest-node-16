module.exports = async function (context, req) {
  const date = "2023-07-22T12:15:41.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

