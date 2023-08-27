module.exports = async function (context, req) {
  const date = "2023-08-27T20:08:04.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

