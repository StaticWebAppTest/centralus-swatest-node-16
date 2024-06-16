module.exports = async function (context, req) {
  const date = "2024-06-16T21:09:37.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

