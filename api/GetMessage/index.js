module.exports = async function (context, req) {
  const date = "2023-06-21T15:08:36.637Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

