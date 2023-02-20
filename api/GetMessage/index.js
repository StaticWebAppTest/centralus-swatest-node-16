module.exports = async function (context, req) {
  const date = "2023-02-20T17:09:04.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

