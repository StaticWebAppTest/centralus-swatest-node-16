module.exports = async function (context, req) {
  const date = "2024-02-16T22:08:02.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

