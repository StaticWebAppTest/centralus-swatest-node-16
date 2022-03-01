module.exports = async function (context, req) {
  const date = "2022-03-01T16:13:37.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

