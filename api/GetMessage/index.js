module.exports = async function (context, req) {
  const date = "2023-04-23T22:08:16.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

