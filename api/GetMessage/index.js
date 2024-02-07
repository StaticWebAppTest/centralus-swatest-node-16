module.exports = async function (context, req) {
  const date = "2024-02-07T12:15:33.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

