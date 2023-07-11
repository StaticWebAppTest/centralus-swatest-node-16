module.exports = async function (context, req) {
  const date = "2023-07-11T13:19:37.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

