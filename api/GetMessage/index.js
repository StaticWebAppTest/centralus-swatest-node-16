module.exports = async function (context, req) {
  const date = "2024-11-24T10:11:45.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

