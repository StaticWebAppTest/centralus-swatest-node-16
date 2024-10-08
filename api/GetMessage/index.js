module.exports = async function (context, req) {
  const date = "2024-10-08T11:10:41.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

