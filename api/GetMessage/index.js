module.exports = async function (context, req) {
  const date = "2022-06-11T08:12:32.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

