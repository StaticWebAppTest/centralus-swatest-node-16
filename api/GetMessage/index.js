module.exports = async function (context, req) {
  const date = "2023-03-03T20:10:37.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

