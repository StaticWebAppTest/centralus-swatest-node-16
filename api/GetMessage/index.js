module.exports = async function (context, req) {
  const date = "2024-11-10T10:10:48.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

