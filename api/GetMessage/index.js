module.exports = async function (context, req) {
  const date = "2023-04-26T14:08:59.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

