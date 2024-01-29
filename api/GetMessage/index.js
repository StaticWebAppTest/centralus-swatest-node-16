module.exports = async function (context, req) {
  const date = "2024-01-29T11:08:04.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

