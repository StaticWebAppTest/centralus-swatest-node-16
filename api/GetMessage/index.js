module.exports = async function (context, req) {
  const date = "2023-11-21T02:26:28.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

