module.exports = async function (context, req) {
  const date = "2023-06-14T08:10:59.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

