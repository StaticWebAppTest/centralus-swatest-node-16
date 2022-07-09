module.exports = async function (context, req) {
  const date = "2022-07-09T20:10:24.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

