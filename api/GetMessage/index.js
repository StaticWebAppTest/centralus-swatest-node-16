module.exports = async function (context, req) {
  const date = "2024-09-07T17:09:57.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

