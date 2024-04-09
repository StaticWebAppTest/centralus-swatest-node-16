module.exports = async function (context, req) {
  const date = "2024-04-09T00:42:10.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

