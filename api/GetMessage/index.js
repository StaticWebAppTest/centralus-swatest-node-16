module.exports = async function (context, req) {
  const date = "2023-02-13T16:13:15.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

