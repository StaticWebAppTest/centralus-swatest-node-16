module.exports = async function (context, req) {
  const date = "2024-02-03T08:10:04.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

