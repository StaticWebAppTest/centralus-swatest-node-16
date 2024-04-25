module.exports = async function (context, req) {
  const date = "2024-04-25T13:08:09.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

