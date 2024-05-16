module.exports = async function (context, req) {
  const date = "2024-05-16T00:44:28.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

