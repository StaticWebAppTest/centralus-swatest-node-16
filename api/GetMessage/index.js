module.exports = async function (context, req) {
  const date = "2024-02-03T17:08:28.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

