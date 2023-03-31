module.exports = async function (context, req) {
  const date = "2023-03-31T04:11:12.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

