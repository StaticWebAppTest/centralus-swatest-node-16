module.exports = async function (context, req) {
  const date = "2024-02-12T23:09:28.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

