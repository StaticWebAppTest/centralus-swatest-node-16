module.exports = async function (context, req) {
  const date = "2023-02-15T17:09:29.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

