module.exports = async function (context, req) {
  const date = "2023-08-14T11:06:55.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

