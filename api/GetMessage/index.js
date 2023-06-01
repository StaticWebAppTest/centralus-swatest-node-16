module.exports = async function (context, req) {
  const date = "2023-06-01T08:11:33.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

