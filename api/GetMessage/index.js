module.exports = async function (context, req) {
  const date = "2024-02-11T16:10:44.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

