module.exports = async function (context, req) {
  const date = "2024-05-31T16:12:08.932Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

