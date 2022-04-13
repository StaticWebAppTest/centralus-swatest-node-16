module.exports = async function (context, req) {
  const date = "2022-04-13T04:14:06.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

