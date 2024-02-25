module.exports = async function (context, req) {
  const date = "2024-02-25T22:08:08.339Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

