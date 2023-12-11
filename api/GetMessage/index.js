module.exports = async function (context, req) {
  const date = "2023-12-11T13:13:15.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

