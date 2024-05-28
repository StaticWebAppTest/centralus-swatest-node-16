module.exports = async function (context, req) {
  const date = "2024-05-28T02:25:54.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

