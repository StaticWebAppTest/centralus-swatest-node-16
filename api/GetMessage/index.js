module.exports = async function (context, req) {
  const date = "2024-09-27T18:15:27.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

