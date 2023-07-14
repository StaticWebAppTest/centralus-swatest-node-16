module.exports = async function (context, req) {
  const date = "2023-07-14T16:12:29.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

