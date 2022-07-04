module.exports = async function (context, req) {
  const date = "2022-07-04T17:15:43.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

