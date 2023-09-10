module.exports = async function (context, req) {
  const date = "2023-09-10T21:06:48.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

