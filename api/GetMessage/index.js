module.exports = async function (context, req) {
  const date = "2022-03-12T20:10:32.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

