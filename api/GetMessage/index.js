module.exports = async function (context, req) {
  const date = "2024-08-03T10:10:02.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

