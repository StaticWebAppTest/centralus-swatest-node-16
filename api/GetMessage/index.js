module.exports = async function (context, req) {
  const date = "2023-07-18T22:08:25.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

