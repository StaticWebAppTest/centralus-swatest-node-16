module.exports = async function (context, req) {
  const date = "2022-10-13T17:33:46.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

