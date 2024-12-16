module.exports = async function (context, req) {
  const date = "2024-12-16T17:11:11.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

