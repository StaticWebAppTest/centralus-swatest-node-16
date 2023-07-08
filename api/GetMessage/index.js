module.exports = async function (context, req) {
  const date = "2023-07-08T22:08:34.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

