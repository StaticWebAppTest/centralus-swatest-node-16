module.exports = async function (context, req) {
  const date = "2023-03-19T13:13:37.667Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

