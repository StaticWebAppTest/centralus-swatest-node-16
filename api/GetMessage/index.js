module.exports = async function (context, req) {
  const date = "2023-05-02T18:10:43.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

