module.exports = async function (context, req) {
  const date = "2023-03-02T15:10:41.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

