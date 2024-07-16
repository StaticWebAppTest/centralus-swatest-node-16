module.exports = async function (context, req) {
  const date = "2024-07-16T17:09:29.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

