module.exports = async function (context, req) {
  const date = "2024-07-03T02:29:20.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

