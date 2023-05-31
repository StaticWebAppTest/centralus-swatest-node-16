module.exports = async function (context, req) {
  const date = "2023-05-31T23:08:15.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

