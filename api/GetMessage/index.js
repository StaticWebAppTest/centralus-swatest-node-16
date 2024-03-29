module.exports = async function (context, req) {
  const date = "2024-03-29T15:08:47.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

