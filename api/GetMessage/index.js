module.exports = async function (context, req) {
  const date = "2023-03-01T22:09:18.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

