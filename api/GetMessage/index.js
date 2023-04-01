module.exports = async function (context, req) {
  const date = "2023-04-01T00:49:04.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

