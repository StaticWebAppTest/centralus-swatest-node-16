module.exports = async function (context, req) {
  const date = "2023-09-29T01:42:45.831Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

