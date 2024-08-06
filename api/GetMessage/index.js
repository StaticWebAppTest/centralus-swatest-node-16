module.exports = async function (context, req) {
  const date = "2024-08-06T23:10:47.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

