module.exports = async function (context, req) {
  const date = "2023-09-14T23:08:37.831Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

