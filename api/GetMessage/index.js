module.exports = async function (context, req) {
  const date = "2022-03-10T05:09:21.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

