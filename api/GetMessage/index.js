module.exports = async function (context, req) {
  const date = "2022-06-13T03:05:22.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

