module.exports = async function (context, req) {
  const date = "2023-02-01T21:08:50.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

