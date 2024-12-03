module.exports = async function (context, req) {
  const date = "2024-12-03T01:02:14.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

