module.exports = async function (context, req) {
  const date = "2022-02-23T16:13:18.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

