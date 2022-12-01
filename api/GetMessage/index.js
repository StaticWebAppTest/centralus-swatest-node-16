module.exports = async function (context, req) {
  const date = "2022-12-01T05:10:06.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

