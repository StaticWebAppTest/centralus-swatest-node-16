module.exports = async function (context, req) {
  const date = "2024-05-19T09:10:34.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

