module.exports = async function (context, req) {
  const date = "2024-09-19T00:54:53.785Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

