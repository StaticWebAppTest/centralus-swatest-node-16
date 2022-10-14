module.exports = async function (context, req) {
  const date = "2022-10-14T15:16:16.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

