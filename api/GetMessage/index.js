module.exports = async function (context, req) {
  const date = "2024-11-14T10:12:47.932Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

