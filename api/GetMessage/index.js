module.exports = async function (context, req) {
  const date = "2022-08-18T16:19:20.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

