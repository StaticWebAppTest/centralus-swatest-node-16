module.exports = async function (context, req) {
  const date = "2022-11-01T11:10:29.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

