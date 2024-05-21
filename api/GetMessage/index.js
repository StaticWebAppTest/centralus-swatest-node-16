module.exports = async function (context, req) {
  const date = "2024-05-21T06:14:11.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

