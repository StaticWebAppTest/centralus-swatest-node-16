module.exports = async function (context, req) {
  const date = "2024-03-04T23:09:53.742Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

