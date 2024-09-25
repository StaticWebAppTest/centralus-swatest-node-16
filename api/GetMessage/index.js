module.exports = async function (context, req) {
  const date = "2024-09-25T21:11:06.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

