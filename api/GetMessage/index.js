module.exports = async function (context, req) {
  const date = "2022-10-27T08:15:51.259Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

