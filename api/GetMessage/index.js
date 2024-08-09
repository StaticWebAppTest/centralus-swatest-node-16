module.exports = async function (context, req) {
  const date = "2024-08-09T16:12:58.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

