module.exports = async function (context, req) {
  const date = "2023-05-21T00:51:52.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

