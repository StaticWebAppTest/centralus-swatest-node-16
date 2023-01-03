module.exports = async function (context, req) {
  const date = "2023-01-03T09:09:44.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

