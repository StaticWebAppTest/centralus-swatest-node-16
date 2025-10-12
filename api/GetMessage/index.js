module.exports = async function (context, req) {
  const date = "2025-10-12T16:13:39.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

