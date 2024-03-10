module.exports = async function (context, req) {
  const date = "2024-03-10T10:08:16.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

