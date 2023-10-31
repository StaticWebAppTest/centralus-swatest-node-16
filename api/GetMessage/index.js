module.exports = async function (context, req) {
  const date = "2023-10-31T09:09:01.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

