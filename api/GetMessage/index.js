module.exports = async function (context, req) {
  const date = "2024-02-27T21:07:44.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

