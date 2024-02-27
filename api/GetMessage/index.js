module.exports = async function (context, req) {
  const date = "2024-02-27T13:09:06.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

