module.exports = async function (context, req) {
  const date = "2024-01-11T09:09:46.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

