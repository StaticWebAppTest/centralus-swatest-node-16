module.exports = async function (context, req) {
  const date = "2022-04-20T17:21:15.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

