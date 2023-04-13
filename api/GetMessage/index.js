module.exports = async function (context, req) {
  const date = "2023-04-13T17:07:47.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

