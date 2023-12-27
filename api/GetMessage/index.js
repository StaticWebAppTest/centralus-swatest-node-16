module.exports = async function (context, req) {
  const date = "2023-12-27T15:08:51.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

