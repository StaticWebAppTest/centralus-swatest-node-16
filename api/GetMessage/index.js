module.exports = async function (context, req) {
  const date = "2024-10-02T02:14:26.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

