module.exports = async function (context, req) {
  const date = "2022-03-24T16:13:52.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

