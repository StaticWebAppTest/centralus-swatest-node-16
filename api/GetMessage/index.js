module.exports = async function (context, req) {
  const date = "2023-03-31T23:07:59.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

