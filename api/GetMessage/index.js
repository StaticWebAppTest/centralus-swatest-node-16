module.exports = async function (context, req) {
  const date = "2024-07-21T17:08:09.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

