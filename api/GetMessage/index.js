module.exports = async function (context, req) {
  const date = "2024-03-11T17:08:58.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

