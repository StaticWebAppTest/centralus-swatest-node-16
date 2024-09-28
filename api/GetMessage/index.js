module.exports = async function (context, req) {
  const date = "2024-09-28T09:10:55.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

