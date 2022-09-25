module.exports = async function (context, req) {
  const date = "2022-09-25T22:11:54.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

