module.exports = async function (context, req) {
  const date = "2024-03-28T17:08:51.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

