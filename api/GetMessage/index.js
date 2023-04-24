module.exports = async function (context, req) {
  const date = "2023-04-24T04:11:11.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

