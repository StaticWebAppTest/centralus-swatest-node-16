module.exports = async function (context, req) {
  const date = "2024-12-27T09:11:36.926Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

