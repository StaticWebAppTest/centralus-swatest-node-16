module.exports = async function (context, req) {
  const date = "2023-04-18T22:08:17.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

