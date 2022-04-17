module.exports = async function (context, req) {
  const date = "2022-04-17T17:11:50.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

