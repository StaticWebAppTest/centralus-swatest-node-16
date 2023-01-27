module.exports = async function (context, req) {
  const date = "2023-01-27T02:14:59.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

