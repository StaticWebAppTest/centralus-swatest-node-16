module.exports = async function (context, req) {
  const date = "2023-04-18T17:06:53.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

