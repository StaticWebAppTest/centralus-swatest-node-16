module.exports = async function (context, req) {
  const date = "2023-12-02T14:07:27.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

