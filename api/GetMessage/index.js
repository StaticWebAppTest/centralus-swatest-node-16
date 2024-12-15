module.exports = async function (context, req) {
  const date = "2024-12-15T13:19:09.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

