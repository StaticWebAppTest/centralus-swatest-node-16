module.exports = async function (context, req) {
  const date = "2022-10-23T15:12:54.158Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

