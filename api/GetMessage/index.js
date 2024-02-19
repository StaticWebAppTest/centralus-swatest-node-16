module.exports = async function (context, req) {
  const date = "2024-02-19T07:10:07.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

