module.exports = async function (context, req) {
  const date = "2022-04-24T13:19:54.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

