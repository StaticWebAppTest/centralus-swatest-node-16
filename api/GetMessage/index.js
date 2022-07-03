module.exports = async function (context, req) {
  const date = "2022-07-03T08:12:38.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

