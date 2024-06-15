module.exports = async function (context, req) {
  const date = "2024-06-15T23:10:45.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

