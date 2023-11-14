module.exports = async function (context, req) {
  const date = "2023-11-14T00:41:59.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

