module.exports = async function (context, req) {
  const date = "2024-12-06T20:13:56.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

