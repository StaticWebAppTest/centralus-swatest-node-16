module.exports = async function (context, req) {
  const date = "2023-10-22T00:44:04.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

