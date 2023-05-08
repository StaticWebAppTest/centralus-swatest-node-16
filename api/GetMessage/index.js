module.exports = async function (context, req) {
  const date = "2023-05-08T19:07:05.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

