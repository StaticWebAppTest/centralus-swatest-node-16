module.exports = async function (context, req) {
  const date = "2023-09-24T02:16:44.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

