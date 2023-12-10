module.exports = async function (context, req) {
  const date = "2023-12-10T23:08:40.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

