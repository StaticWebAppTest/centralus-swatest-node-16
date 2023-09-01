module.exports = async function (context, req) {
  const date = "2023-09-01T23:07:58.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

