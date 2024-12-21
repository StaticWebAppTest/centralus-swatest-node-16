module.exports = async function (context, req) {
  const date = "2024-12-21T14:09:28.918Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

