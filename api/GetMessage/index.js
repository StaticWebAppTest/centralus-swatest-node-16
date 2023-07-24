module.exports = async function (context, req) {
  const date = "2023-07-24T14:08:44.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

