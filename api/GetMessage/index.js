module.exports = async function (context, req) {
  const date = "2023-07-21T23:08:15.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

