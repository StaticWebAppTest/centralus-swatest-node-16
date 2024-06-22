module.exports = async function (context, req) {
  const date = "2024-06-22T15:09:38.831Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

