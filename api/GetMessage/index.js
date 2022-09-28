module.exports = async function (context, req) {
  const date = "2022-09-28T12:26:25.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

