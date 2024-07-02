module.exports = async function (context, req) {
  const date = "2024-07-02T23:09:37.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

