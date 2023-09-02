module.exports = async function (context, req) {
  const date = "2023-09-02T21:06:39.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

