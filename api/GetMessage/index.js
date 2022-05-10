module.exports = async function (context, req) {
  const date = "2022-05-10T18:13:48.006Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

