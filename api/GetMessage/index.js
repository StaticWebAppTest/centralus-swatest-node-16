module.exports = async function (context, req) {
  const date = "2022-09-23T15:13:56.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

