module.exports = async function (context, req) {
  const date = "2023-03-27T19:07:41.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

