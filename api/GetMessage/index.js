module.exports = async function (context, req) {
  const date = "2023-12-10T19:06:53.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

