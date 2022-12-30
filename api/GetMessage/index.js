module.exports = async function (context, req) {
  const date = "2022-12-30T20:09:23.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

