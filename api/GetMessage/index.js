module.exports = async function (context, req) {
  const date = "2024-02-26T10:10:14.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

