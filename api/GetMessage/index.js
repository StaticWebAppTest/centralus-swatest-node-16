module.exports = async function (context, req) {
  const date = "2022-02-23T18:10:05.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

