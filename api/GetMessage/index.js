module.exports = async function (context, req) {
  const date = "2023-05-04T19:06:53.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

