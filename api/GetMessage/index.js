module.exports = async function (context, req) {
  const date = "2023-02-15T08:13:21.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

