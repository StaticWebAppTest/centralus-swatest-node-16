module.exports = async function (context, req) {
  const date = "2022-04-08T09:10:43.464Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

