module.exports = async function (context, req) {
  const date = "2023-12-21T19:06:24.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

