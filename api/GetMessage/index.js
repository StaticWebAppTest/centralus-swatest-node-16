module.exports = async function (context, req) {
  const date = "2024-05-10T14:08:46.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

