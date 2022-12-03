module.exports = async function (context, req) {
  const date = "2022-12-03T14:07:57.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

