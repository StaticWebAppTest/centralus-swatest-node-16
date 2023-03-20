module.exports = async function (context, req) {
  const date = "2023-03-20T17:09:07.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

