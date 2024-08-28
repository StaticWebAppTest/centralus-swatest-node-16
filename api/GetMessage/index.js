module.exports = async function (context, req) {
  const date = "2024-08-28T08:14:16.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

