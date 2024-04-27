module.exports = async function (context, req) {
  const date = "2024-04-27T18:10:47.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

