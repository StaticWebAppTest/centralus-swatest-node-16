module.exports = async function (context, req) {
  const date = "2023-05-15T00:50:44.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

