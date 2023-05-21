module.exports = async function (context, req) {
  const date = "2023-05-21T04:10:08.742Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

