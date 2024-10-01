module.exports = async function (context, req) {
  const date = "2024-10-01T14:11:26.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

