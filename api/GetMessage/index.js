module.exports = async function (context, req) {
  const date = "2024-09-08T13:13:58.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

