module.exports = async function (context, req) {
  const date = "2024-05-24T17:09:31.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

