module.exports = async function (context, req) {
  const date = "2023-06-23T17:09:16.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

