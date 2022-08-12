module.exports = async function (context, req) {
  const date = "2022-08-12T20:11:23.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

