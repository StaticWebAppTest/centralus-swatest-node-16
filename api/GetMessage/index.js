module.exports = async function (context, req) {
  const date = "2023-06-16T03:09:50.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

