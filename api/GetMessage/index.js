module.exports = async function (context, req) {
  const date = "2024-03-28T16:10:55.490Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

