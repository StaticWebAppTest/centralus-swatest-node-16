module.exports = async function (context, req) {
  const date = "2023-02-03T19:07:53.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

