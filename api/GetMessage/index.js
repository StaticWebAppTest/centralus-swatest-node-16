module.exports = async function (context, req) {
  const date = "2022-09-20T18:15:23.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

