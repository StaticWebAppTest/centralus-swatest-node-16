module.exports = async function (context, req) {
  const date = "2022-11-22T09:11:12.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

