module.exports = async function (context, req) {
  const date = "2022-04-20T04:38:10.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

