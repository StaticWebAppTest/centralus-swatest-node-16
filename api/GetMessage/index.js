module.exports = async function (context, req) {
  const date = "2023-07-21T22:08:10.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

