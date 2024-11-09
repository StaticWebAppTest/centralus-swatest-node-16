module.exports = async function (context, req) {
  const date = "2024-11-09T09:10:29.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

