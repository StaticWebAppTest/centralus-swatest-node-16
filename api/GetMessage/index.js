module.exports = async function (context, req) {
  const date = "2023-10-12T17:08:05.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

