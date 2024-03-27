module.exports = async function (context, req) {
  const date = "2024-03-27T17:07:46.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

