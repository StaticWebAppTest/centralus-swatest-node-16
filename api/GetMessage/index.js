module.exports = async function (context, req) {
  const date = "2023-02-22T17:09:18.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

