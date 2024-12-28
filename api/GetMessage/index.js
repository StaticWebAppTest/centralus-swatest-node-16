module.exports = async function (context, req) {
  const date = "2024-12-28T16:12:37.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

