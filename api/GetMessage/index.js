module.exports = async function (context, req) {
  const date = "2023-07-02T16:11:20.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

