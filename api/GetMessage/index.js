module.exports = async function (context, req) {
  const date = "2024-06-08T09:11:32.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

