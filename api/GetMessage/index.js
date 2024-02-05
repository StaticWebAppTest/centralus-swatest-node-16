module.exports = async function (context, req) {
  const date = "2024-02-05T02:22:27.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

