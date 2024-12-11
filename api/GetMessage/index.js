module.exports = async function (context, req) {
  const date = "2024-12-11T23:12:12.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

