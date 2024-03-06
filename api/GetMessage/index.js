module.exports = async function (context, req) {
  const date = "2024-03-06T01:40:53.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

