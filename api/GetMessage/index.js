module.exports = async function (context, req) {
  const date = "2024-11-14T09:12:44.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

