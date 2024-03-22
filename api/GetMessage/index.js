module.exports = async function (context, req) {
  const date = "2024-03-22T09:10:48.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

