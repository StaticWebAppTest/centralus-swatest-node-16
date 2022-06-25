module.exports = async function (context, req) {
  const date = "2022-06-25T06:12:51.259Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

