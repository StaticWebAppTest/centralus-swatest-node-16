module.exports = async function (context, req) {
  const date = "2024-02-11T21:08:13.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

