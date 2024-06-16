module.exports = async function (context, req) {
  const date = "2024-06-16T11:08:38.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

