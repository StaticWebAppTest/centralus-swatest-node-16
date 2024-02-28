module.exports = async function (context, req) {
  const date = "2024-02-28T17:08:39.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

