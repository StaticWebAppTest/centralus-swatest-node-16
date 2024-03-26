module.exports = async function (context, req) {
  const date = "2024-03-26T14:09:16.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

