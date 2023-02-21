module.exports = async function (context, req) {
  const date = "2023-02-21T07:09:29.656Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

