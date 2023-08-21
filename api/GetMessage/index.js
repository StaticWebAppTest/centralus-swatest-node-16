module.exports = async function (context, req) {
  const date = "2023-08-21T09:08:56.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

