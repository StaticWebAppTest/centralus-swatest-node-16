module.exports = async function (context, req) {
  const date = "2023-08-31T08:11:36.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

