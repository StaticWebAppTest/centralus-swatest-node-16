module.exports = async function (context, req) {
  const date = "2023-06-18T23:08:45.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

