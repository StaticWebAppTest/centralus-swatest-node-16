module.exports = async function (context, req) {
  const date = "2024-12-09T23:12:18.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

