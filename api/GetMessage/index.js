module.exports = async function (context, req) {
  const date = "2024-09-08T17:09:57.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

