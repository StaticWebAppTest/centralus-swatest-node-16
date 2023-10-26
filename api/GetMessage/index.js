module.exports = async function (context, req) {
  const date = "2023-10-26T17:08:16.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

