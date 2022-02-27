module.exports = async function (context, req) {
  const date = "2022-02-27T05:08:52.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

