module.exports = async function (context, req) {
  const date = "2022-06-13T08:13:22.369Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

