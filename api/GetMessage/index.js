module.exports = async function (context, req) {
  const date = "2023-11-17T17:08:29.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

