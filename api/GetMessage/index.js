module.exports = async function (context, req) {
  const date = "2024-07-21T16:13:31.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

