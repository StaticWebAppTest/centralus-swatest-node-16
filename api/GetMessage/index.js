module.exports = async function (context, req) {
  const date = "2024-04-15T17:08:13.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

