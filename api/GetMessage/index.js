module.exports = async function (context, req) {
  const date = "2022-11-10T22:11:38.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

