module.exports = async function (context, req) {
  const date = "2024-09-08T11:08:15.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

