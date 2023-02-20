module.exports = async function (context, req) {
  const date = "2023-02-20T22:09:15.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

