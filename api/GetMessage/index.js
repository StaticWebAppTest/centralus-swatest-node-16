module.exports = async function (context, req) {
  const date = "2022-10-07T22:13:36.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

