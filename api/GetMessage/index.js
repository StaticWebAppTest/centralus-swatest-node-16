module.exports = async function (context, req) {
  const date = "2024-10-06T09:11:35.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

