module.exports = async function (context, req) {
  const date = "2023-07-28T22:07:45.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

