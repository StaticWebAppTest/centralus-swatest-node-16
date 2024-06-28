module.exports = async function (context, req) {
  const date = "2024-06-28T12:18:45.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

