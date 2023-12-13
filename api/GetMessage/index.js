module.exports = async function (context, req) {
  const date = "2023-12-13T03:10:17.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

