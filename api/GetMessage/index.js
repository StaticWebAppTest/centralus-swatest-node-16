module.exports = async function (context, req) {
  const date = "2024-12-03T17:11:42.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

