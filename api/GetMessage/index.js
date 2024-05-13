module.exports = async function (context, req) {
  const date = "2024-05-13T03:10:38.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

