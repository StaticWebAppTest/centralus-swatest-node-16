module.exports = async function (context, req) {
  const date = "2024-11-16T12:21:11.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

