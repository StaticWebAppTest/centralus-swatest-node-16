module.exports = async function (context, req) {
  const date = "2022-05-30T03:26:12.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

