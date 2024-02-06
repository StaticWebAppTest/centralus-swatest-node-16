module.exports = async function (context, req) {
  const date = "2024-02-06T00:40:53.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

