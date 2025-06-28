module.exports = async function (context, req) {
  const date = "2025-06-28T20:13:54.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

