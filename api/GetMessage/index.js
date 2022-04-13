module.exports = async function (context, req) {
  const date = "2022-04-13T08:14:03.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

