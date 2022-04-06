module.exports = async function (context, req) {
  const date = "2022-04-06T04:12:50.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

