module.exports = async function (context, req) {
  const date = "2024-01-16T18:11:56.143Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

