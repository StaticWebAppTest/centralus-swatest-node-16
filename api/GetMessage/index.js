module.exports = async function (context, req) {
  const date = "2025-01-04T07:10:02.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

