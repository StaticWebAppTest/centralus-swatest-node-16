module.exports = async function (context, req) {
  const date = "2022-05-13T05:35:25.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

