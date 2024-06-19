module.exports = async function (context, req) {
  const date = "2024-06-19T21:11:04.144Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

