module.exports = async function (context, req) {
  const date = "2024-11-29T19:10:09.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

