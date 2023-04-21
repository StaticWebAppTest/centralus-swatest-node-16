module.exports = async function (context, req) {
  const date = "2023-04-21T17:08:05.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

