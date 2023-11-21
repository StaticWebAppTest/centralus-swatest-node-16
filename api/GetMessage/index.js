module.exports = async function (context, req) {
  const date = "2023-11-21T13:13:02.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

