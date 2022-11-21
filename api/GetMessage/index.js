module.exports = async function (context, req) {
  const date = "2022-11-21T02:53:36.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

