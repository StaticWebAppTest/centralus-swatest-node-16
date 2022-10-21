module.exports = async function (context, req) {
  const date = "2022-10-21T23:14:47.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

