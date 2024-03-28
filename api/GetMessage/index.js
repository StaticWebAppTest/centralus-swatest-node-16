module.exports = async function (context, req) {
  const date = "2024-03-28T06:12:11.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

