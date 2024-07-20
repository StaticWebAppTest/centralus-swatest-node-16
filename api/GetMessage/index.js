module.exports = async function (context, req) {
  const date = "2024-07-20T22:10:17.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

