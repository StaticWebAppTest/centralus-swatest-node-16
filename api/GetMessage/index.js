module.exports = async function (context, req) {
  const date = "2024-02-26T06:12:46.576Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

