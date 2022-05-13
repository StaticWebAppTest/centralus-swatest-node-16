module.exports = async function (context, req) {
  const date = "2022-05-13T14:14:25.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

