module.exports = async function (context, req) {
  const date = "2025-07-25T11:12:50.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

