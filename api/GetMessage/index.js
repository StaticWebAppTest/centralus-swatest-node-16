module.exports = async function (context, req) {
  const date = "2023-06-15T02:09:42.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

