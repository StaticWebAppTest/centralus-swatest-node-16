module.exports = async function (context, req) {
  const date = "2024-10-03T16:14:23.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

