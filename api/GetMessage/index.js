module.exports = async function (context, req) {
  const date = "2023-09-03T03:08:43.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

