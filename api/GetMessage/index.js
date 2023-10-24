module.exports = async function (context, req) {
  const date = "2023-10-24T02:16:54.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

