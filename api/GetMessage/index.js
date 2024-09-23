module.exports = async function (context, req) {
  const date = "2024-09-23T23:10:58.462Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

