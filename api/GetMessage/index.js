module.exports = async function (context, req) {
  const date = "2023-01-05T11:08:21.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

