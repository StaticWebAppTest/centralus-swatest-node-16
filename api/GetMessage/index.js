module.exports = async function (context, req) {
  const date = "2023-04-25T16:11:27.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

