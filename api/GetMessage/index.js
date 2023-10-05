module.exports = async function (context, req) {
  const date = "2023-10-05T17:08:12.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

