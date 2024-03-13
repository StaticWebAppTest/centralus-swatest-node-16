module.exports = async function (context, req) {
  const date = "2024-03-13T08:11:11.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

