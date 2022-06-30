module.exports = async function (context, req) {
  const date = "2022-06-30T20:11:30.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

