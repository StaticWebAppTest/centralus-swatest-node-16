module.exports = async function (context, req) {
  const date = "2024-04-29T09:10:39.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

