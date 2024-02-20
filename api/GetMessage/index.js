module.exports = async function (context, req) {
  const date = "2024-02-20T17:07:57.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

