module.exports = async function (context, req) {
  const date = "2022-08-14T08:12:55.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

