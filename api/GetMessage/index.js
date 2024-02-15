module.exports = async function (context, req) {
  const date = "2024-02-15T07:08:18.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

