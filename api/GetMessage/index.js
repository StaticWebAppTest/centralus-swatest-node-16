module.exports = async function (context, req) {
  const date = "2023-08-14T12:16:18.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

