module.exports = async function (context, req) {
  const date = "2024-05-16T02:23:17.831Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

