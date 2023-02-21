module.exports = async function (context, req) {
  const date = "2023-02-21T13:19:01.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

