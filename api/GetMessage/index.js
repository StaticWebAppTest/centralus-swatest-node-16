module.exports = async function (context, req) {
  const date = "2023-01-14T23:09:06.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

