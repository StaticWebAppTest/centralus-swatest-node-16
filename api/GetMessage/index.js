module.exports = async function (context, req) {
  const date = "2023-12-05T01:53:15.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

