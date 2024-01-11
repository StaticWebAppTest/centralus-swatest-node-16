module.exports = async function (context, req) {
  const date = "2024-01-11T00:44:59.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

