module.exports = async function (context, req) {
  const date = "2024-03-27T07:08:41.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

