module.exports = async function (context, req) {
  const date = "2024-02-16T03:10:57.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

