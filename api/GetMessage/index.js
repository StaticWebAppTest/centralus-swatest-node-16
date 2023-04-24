module.exports = async function (context, req) {
  const date = "2023-04-24T23:08:56.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

