module.exports = async function (context, req) {
  const date = "2023-11-13T20:07:37.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

