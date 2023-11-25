module.exports = async function (context, req) {
  const date = "2023-11-25T02:18:04.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

