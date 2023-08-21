module.exports = async function (context, req) {
  const date = "2023-08-21T23:08:15.196Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

