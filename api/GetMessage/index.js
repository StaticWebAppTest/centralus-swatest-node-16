module.exports = async function (context, req) {
  const date = "2023-09-29T19:07:15.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

