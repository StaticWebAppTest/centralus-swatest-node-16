module.exports = async function (context, req) {
  const date = "2024-02-06T22:08:09.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

