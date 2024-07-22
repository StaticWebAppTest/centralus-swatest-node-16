module.exports = async function (context, req) {
  const date = "2024-07-22T17:09:40.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

