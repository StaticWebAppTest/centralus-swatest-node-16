module.exports = async function (context, req) {
  const date = "2023-09-18T23:08:28.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

