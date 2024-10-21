module.exports = async function (context, req) {
  const date = "2024-10-21T02:20:08.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

