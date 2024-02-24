module.exports = async function (context, req) {
  const date = "2024-02-24T21:07:07.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

