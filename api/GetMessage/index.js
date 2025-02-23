module.exports = async function (context, req) {
  const date = "2025-02-23T09:11:15.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

