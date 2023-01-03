module.exports = async function (context, req) {
  const date = "2023-01-03T07:08:37.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

