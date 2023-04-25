module.exports = async function (context, req) {
  const date = "2023-04-25T23:08:44.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

