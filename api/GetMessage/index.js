module.exports = async function (context, req) {
  const date = "2023-01-03T13:16:37.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

