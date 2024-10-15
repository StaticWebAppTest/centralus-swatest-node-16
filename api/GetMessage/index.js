module.exports = async function (context, req) {
  const date = "2024-10-15T14:11:18.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

