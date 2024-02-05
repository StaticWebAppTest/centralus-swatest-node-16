module.exports = async function (context, req) {
  const date = "2024-02-05T11:07:46.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

