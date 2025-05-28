module.exports = async function (context, req) {
  const date = "2025-05-28T09:14:30.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

