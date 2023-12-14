module.exports = async function (context, req) {
  const date = "2023-12-14T01:50:49.932Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

