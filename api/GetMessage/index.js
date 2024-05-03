module.exports = async function (context, req) {
  const date = "2024-05-03T00:46:25.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

