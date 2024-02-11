module.exports = async function (context, req) {
  const date = "2024-02-11T03:09:18.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

