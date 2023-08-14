module.exports = async function (context, req) {
  const date = "2023-08-14T03:08:51.865Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

