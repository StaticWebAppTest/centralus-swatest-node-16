module.exports = async function (context, req) {
  const date = "2023-01-11T08:13:17.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

