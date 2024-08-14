module.exports = async function (context, req) {
  const date = "2024-08-14T22:11:06.427Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

