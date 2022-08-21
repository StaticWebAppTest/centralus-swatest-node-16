module.exports = async function (context, req) {
  const date = "2022-08-21T10:11:27.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

