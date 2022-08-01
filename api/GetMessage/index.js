module.exports = async function (context, req) {
  const date = "2022-08-01T20:13:57.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

