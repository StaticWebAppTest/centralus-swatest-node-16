module.exports = async function (context, req) {
  const date = "2023-10-21T16:09:47.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

