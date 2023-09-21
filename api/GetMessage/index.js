module.exports = async function (context, req) {
  const date = "2023-09-21T21:07:31.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

