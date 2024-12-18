module.exports = async function (context, req) {
  const date = "2024-12-18T22:11:35.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

