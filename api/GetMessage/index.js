module.exports = async function (context, req) {
  const date = "2024-03-29T17:08:36.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

