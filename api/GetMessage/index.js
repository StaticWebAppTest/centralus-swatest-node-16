module.exports = async function (context, req) {
  const date = "2023-03-31T00:50:32.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

