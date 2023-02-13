module.exports = async function (context, req) {
  const date = "2023-02-13T02:18:24.245Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

