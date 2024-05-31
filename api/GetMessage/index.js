module.exports = async function (context, req) {
  const date = "2024-05-31T01:54:23.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

