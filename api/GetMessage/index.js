module.exports = async function (context, req) {
  const date = "2023-03-02T05:09:51.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

