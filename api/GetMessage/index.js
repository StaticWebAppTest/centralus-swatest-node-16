module.exports = async function (context, req) {
  const date = "2024-08-15T15:10:36.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

