module.exports = async function (context, req) {
  const date = "2024-08-25T19:09:18.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

