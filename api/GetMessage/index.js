module.exports = async function (context, req) {
  const date = "2022-11-03T03:24:32.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

