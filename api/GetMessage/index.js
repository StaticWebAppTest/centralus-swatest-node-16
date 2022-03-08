module.exports = async function (context, req) {
  const date = "2022-03-08T22:10:22.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

