module.exports = async function (context, req) {
  const date = "2022-10-08T21:11:22.029Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

