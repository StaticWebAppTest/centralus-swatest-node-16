module.exports = async function (context, req) {
  const date = "2024-03-25T13:10:08.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

