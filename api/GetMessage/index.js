module.exports = async function (context, req) {
  const date = "2023-03-25T22:08:57.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

