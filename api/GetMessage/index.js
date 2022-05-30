module.exports = async function (context, req) {
  const date = "2022-05-30T20:12:17.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

