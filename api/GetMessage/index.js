module.exports = async function (context, req) {
  const date = "2024-02-10T22:07:34.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

