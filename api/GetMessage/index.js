module.exports = async function (context, req) {
  const date = "2023-08-21T12:15:52.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

