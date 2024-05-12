module.exports = async function (context, req) {
  const date = "2024-05-12T23:09:59.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

