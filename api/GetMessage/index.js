module.exports = async function (context, req) {
  const date = "2024-06-30T17:09:00.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

