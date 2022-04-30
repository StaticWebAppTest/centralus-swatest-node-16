module.exports = async function (context, req) {
  const date = "2022-04-30T16:13:41.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

