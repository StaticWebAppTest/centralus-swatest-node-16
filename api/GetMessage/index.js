module.exports = async function (context, req) {
  const date = "2023-07-16T17:08:05.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

