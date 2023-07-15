module.exports = async function (context, req) {
  const date = "2023-07-15T00:59:41.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

