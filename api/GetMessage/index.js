module.exports = async function (context, req) {
  const date = "2024-11-14T17:11:23.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

