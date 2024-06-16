module.exports = async function (context, req) {
  const date = "2024-06-16T06:13:31.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

