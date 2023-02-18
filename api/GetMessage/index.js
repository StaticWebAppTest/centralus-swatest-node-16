module.exports = async function (context, req) {
  const date = "2023-02-18T12:16:44.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

