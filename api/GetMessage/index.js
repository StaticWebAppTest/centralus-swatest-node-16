module.exports = async function (context, req) {
  const date = "2022-06-23T16:15:22.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

