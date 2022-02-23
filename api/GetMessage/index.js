module.exports = async function (context, req) {
  const date = "2022-02-23T05:09:13.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

