module.exports = async function (context, req) {
  const date = "2023-01-21T21:07:40.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

