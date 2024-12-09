module.exports = async function (context, req) {
  const date = "2024-12-09T17:11:22.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

