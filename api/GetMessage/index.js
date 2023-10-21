module.exports = async function (context, req) {
  const date = "2023-10-21T20:08:21.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

