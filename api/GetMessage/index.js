module.exports = async function (context, req) {
  const date = "2023-04-21T22:08:09.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

