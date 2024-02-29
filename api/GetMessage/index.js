module.exports = async function (context, req) {
  const date = "2024-02-29T13:09:29.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

