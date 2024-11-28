module.exports = async function (context, req) {
  const date = "2024-11-28T07:12:37.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

