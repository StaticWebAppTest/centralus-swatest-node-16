module.exports = async function (context, req) {
  const date = "2023-05-08T00:45:47.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

