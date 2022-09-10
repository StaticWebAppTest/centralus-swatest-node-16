module.exports = async function (context, req) {
  const date = "2022-09-10T14:10:23.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

