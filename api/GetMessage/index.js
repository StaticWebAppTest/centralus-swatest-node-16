module.exports = async function (context, req) {
  const date = "2023-07-21T17:07:53.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

