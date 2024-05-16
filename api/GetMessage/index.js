module.exports = async function (context, req) {
  const date = "2024-05-16T01:52:04.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

