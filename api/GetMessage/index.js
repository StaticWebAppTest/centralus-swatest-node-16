module.exports = async function (context, req) {
  const date = "2023-02-08T21:09:03.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

