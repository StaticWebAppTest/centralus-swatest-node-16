module.exports = async function (context, req) {
  const date = "2023-01-30T20:10:18.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

