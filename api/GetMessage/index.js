module.exports = async function (context, req) {
  const date = "2023-09-13T09:08:53.735Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

