module.exports = async function (context, req) {
  const date = "2024-06-28T03:12:27.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

