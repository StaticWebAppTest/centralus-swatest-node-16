module.exports = async function (context, req) {
  const date = "2022-03-30T19:09:21.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

