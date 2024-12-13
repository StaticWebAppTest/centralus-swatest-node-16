module.exports = async function (context, req) {
  const date = "2024-12-13T17:11:22.576Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

