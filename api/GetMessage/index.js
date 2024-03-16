module.exports = async function (context, req) {
  const date = "2024-03-16T21:07:28.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

