module.exports = async function (context, req) {
  const date = "2023-01-23T02:10:57.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

