module.exports = async function (context, req) {
  const date = "2024-02-16T23:08:27.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

