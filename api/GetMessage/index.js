module.exports = async function (context, req) {
  const date = "2024-02-24T01:37:25.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

