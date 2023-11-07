module.exports = async function (context, req) {
  const date = "2023-11-07T17:08:15.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

