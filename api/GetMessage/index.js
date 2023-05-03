module.exports = async function (context, req) {
  const date = "2023-05-03T19:07:06.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

