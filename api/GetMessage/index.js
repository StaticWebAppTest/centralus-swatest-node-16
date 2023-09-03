module.exports = async function (context, req) {
  const date = "2023-09-03T17:07:36.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

