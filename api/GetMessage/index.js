module.exports = async function (context, req) {
  const date = "2024-06-01T14:09:20.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

