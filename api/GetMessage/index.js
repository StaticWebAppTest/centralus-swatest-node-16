module.exports = async function (context, req) {
  const date = "2022-11-30T02:21:53.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

