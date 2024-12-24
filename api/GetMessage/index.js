module.exports = async function (context, req) {
  const date = "2024-12-24T12:22:23.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

