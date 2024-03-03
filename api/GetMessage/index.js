module.exports = async function (context, req) {
  const date = "2024-03-03T17:07:14.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

