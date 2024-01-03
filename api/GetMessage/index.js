module.exports = async function (context, req) {
  const date = "2024-01-03T09:10:31.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

