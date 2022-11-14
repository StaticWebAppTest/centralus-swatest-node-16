module.exports = async function (context, req) {
  const date = "2022-11-14T20:12:26.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

