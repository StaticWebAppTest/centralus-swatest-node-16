module.exports = async function (context, req) {
  const date = "2024-10-15T10:13:58.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

