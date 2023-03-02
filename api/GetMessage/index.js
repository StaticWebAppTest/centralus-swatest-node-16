module.exports = async function (context, req) {
  const date = "2023-03-02T19:08:12.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

