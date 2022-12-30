module.exports = async function (context, req) {
  const date = "2022-12-30T22:08:17.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

