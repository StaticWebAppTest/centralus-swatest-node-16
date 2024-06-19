module.exports = async function (context, req) {
  const date = "2024-06-19T17:09:57.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

