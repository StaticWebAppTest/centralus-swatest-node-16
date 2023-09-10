module.exports = async function (context, req) {
  const date = "2023-09-10T03:08:46.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

