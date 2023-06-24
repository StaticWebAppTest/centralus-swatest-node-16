module.exports = async function (context, req) {
  const date = "2023-06-24T23:09:33.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

