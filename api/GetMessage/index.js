module.exports = async function (context, req) {
  const date = "2024-11-22T13:21:25.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

