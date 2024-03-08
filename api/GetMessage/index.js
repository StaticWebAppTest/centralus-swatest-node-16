module.exports = async function (context, req) {
  const date = "2024-03-08T09:09:13.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

