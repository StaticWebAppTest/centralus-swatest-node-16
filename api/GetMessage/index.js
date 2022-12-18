module.exports = async function (context, req) {
  const date = "2022-12-18T02:06:33.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

