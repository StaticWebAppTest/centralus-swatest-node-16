module.exports = async function (context, req) {
  const date = "2022-09-13T23:13:41.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

