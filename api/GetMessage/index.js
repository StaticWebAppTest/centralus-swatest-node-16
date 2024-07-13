module.exports = async function (context, req) {
  const date = "2024-07-13T22:09:05.196Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

