module.exports = async function (context, req) {
  const date = "2024-09-28T10:10:45.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

