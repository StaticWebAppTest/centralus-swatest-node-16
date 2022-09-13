module.exports = async function (context, req) {
  const date = "2022-09-13T07:31:51.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

