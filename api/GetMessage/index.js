module.exports = async function (context, req) {
  const date = "2023-10-14T10:08:06.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

