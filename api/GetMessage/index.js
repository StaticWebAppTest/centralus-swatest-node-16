module.exports = async function (context, req) {
  const date = "2022-09-14T08:15:15.464Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

