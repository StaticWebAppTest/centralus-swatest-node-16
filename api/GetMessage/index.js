module.exports = async function (context, req) {
  const date = "2024-10-24T12:22:34.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

