module.exports = async function (context, req) {
  const date = "2024-06-21T16:11:57.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

