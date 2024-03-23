module.exports = async function (context, req) {
  const date = "2024-03-23T03:11:03.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

