module.exports = async function (context, req) {
  const date = "2024-12-08T16:13:43.665Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

