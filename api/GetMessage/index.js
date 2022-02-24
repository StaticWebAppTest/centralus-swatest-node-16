module.exports = async function (context, req) {
  const date = "2022-02-24T06:12:08.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

