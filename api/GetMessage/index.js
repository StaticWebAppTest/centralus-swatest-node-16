module.exports = async function (context, req) {
  const date = "2024-11-18T15:13:05.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

