module.exports = async function (context, req) {
  const date = "2022-12-13T05:09:22.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

