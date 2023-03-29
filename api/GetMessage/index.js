module.exports = async function (context, req) {
  const date = "2023-03-29T20:09:45.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

