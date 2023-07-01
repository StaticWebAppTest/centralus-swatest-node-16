module.exports = async function (context, req) {
  const date = "2023-07-01T19:07:18.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

