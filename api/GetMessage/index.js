module.exports = async function (context, req) {
  const date = "2023-03-15T20:10:25.872Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

