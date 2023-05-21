module.exports = async function (context, req) {
  const date = "2023-05-21T23:08:11.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

