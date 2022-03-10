module.exports = async function (context, req) {
  const date = "2022-03-10T11:09:22.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

