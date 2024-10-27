module.exports = async function (context, req) {
  const date = "2024-10-27T03:21:10.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

