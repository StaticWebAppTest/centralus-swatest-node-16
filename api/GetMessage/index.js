module.exports = async function (context, req) {
  const date = "2022-03-23T19:08:21.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

