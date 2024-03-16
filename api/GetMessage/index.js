module.exports = async function (context, req) {
  const date = "2024-03-16T18:11:06.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

