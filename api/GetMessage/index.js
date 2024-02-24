module.exports = async function (context, req) {
  const date = "2024-02-24T15:07:40.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

