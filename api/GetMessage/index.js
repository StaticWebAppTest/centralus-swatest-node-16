module.exports = async function (context, req) {
  const date = "2024-01-08T09:10:04.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

