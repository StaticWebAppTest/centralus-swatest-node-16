module.exports = async function (context, req) {
  const date = "2022-06-06T19:11:58.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

