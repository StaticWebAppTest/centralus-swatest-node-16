module.exports = async function (context, req) {
  const date = "2023-09-22T23:08:24.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

