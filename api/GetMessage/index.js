module.exports = async function (context, req) {
  const date = "2023-04-07T06:11:57.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

