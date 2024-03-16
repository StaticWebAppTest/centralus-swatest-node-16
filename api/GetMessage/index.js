module.exports = async function (context, req) {
  const date = "2024-03-16T03:10:08.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

