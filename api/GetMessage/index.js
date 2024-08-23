module.exports = async function (context, req) {
  const date = "2024-08-23T16:13:56.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

