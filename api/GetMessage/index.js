module.exports = async function (context, req) {
  const date = "2023-12-20T23:09:31.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

