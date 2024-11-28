module.exports = async function (context, req) {
  const date = "2024-11-28T19:09:42.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

