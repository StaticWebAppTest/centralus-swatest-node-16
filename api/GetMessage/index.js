module.exports = async function (context, req) {
  const date = "2024-01-21T02:31:46.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

