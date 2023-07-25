module.exports = async function (context, req) {
  const date = "2023-07-25T23:06:59.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

