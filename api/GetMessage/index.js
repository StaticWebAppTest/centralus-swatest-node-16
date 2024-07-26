module.exports = async function (context, req) {
  const date = "2024-07-26T17:09:57.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

