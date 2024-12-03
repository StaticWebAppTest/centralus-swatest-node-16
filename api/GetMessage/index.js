module.exports = async function (context, req) {
  const date = "2024-12-03T07:12:23.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

