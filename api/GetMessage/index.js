module.exports = async function (context, req) {
  const date = "2024-04-10T05:08:54.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

