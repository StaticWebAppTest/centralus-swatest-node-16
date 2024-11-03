module.exports = async function (context, req) {
  const date = "2024-11-03T18:15:15.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

