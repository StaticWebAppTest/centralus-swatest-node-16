module.exports = async function (context, req) {
  const date = "2023-12-12T20:10:11.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

