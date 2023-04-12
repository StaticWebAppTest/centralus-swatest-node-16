module.exports = async function (context, req) {
  const date = "2023-04-12T03:09:34.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

