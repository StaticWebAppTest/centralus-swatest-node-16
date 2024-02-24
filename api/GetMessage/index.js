module.exports = async function (context, req) {
  const date = "2024-02-24T00:38:50.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

