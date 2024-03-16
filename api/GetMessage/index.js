module.exports = async function (context, req) {
  const date = "2024-03-16T05:09:43.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

