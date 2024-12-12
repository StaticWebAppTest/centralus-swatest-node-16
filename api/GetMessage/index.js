module.exports = async function (context, req) {
  const date = "2024-12-12T22:12:08.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

