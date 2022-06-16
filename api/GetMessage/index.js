module.exports = async function (context, req) {
  const date = "2022-06-16T04:26:03.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

