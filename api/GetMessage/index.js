module.exports = async function (context, req) {
  const date = "2022-11-12T20:11:26.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

