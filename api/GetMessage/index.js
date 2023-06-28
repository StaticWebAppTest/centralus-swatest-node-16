module.exports = async function (context, req) {
  const date = "2023-06-28T10:10:49.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

