module.exports = async function (context, req) {
  const date = "2022-04-25T17:16:38.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

