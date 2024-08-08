module.exports = async function (context, req) {
  const date = "2024-08-08T17:09:23.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

