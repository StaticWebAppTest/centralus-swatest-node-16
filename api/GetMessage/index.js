module.exports = async function (context, req) {
  const date = "2024-11-08T16:13:56.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

