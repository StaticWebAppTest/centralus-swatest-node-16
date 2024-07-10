module.exports = async function (context, req) {
  const date = "2024-07-10T22:09:42.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

