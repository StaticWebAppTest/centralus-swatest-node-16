module.exports = async function (context, req) {
  const date = "2022-11-30T03:18:33.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

