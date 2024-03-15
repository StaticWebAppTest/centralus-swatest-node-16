module.exports = async function (context, req) {
  const date = "2024-03-15T08:11:56.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

