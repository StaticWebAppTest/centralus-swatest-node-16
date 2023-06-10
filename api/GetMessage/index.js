module.exports = async function (context, req) {
  const date = "2023-06-10T03:08:49.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

