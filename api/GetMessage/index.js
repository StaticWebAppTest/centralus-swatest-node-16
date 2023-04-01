module.exports = async function (context, req) {
  const date = "2023-04-01T17:07:05.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

