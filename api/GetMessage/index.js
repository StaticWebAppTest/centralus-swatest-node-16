module.exports = async function (context, req) {
  const date = "2023-06-21T03:09:38.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

