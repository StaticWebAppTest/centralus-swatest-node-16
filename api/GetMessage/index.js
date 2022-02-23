module.exports = async function (context, req) {
  const date = "2022-02-23T23:10:19.462Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

