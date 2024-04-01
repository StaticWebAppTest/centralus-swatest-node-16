module.exports = async function (context, req) {
  const date = "2024-04-01T16:11:59.561Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

