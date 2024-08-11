module.exports = async function (context, req) {
  const date = "2024-08-11T22:11:07.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

