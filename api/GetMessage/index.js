module.exports = async function (context, req) {
  const date = "2023-03-21T06:12:14.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

