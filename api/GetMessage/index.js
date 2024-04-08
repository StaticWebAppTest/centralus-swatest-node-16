module.exports = async function (context, req) {
  const date = "2024-04-08T10:11:41.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

