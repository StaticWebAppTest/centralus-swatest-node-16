module.exports = async function (context, req) {
  const date = "2024-10-12T17:09:16.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

