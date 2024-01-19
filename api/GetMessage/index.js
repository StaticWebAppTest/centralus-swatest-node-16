module.exports = async function (context, req) {
  const date = "2024-01-19T23:08:03.996Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

