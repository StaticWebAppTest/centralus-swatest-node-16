module.exports = async function (context, req) {
  const date = "2024-09-25T14:11:27.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

