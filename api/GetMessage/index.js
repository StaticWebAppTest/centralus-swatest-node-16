module.exports = async function (context, req) {
  const date = "2023-03-16T12:18:43.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

