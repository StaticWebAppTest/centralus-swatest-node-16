module.exports = async function (context, req) {
  const date = "2022-08-18T20:12:32.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

