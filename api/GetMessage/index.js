module.exports = async function (context, req) {
  const date = "2022-05-15T17:16:47.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

