module.exports = async function (context, req) {
  const date = "2024-10-02T22:12:27.432Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

