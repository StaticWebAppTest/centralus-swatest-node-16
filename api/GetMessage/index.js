module.exports = async function (context, req) {
  const date = "2023-09-16T19:06:53.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

