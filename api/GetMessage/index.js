module.exports = async function (context, req) {
  const date = "2023-01-23T19:07:33.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

