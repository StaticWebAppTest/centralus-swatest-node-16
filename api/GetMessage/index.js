module.exports = async function (context, req) {
  const date = "2023-11-22T22:07:19.006Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

