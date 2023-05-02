module.exports = async function (context, req) {
  const date = "2023-05-02T02:34:39.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

