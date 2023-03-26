module.exports = async function (context, req) {
  const date = "2023-03-26T22:08:04.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

