module.exports = async function (context, req) {
  const date = "2024-03-03T02:17:07.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

