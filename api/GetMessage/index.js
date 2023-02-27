module.exports = async function (context, req) {
  const date = "2023-02-27T17:09:35.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

