module.exports = async function (context, req) {
  const date = "2024-10-12T18:13:54.851Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

