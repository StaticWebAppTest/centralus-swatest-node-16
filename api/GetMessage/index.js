module.exports = async function (context, req) {
  const date = "2024-06-24T20:10:54.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

