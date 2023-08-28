module.exports = async function (context, req) {
  const date = "2023-08-28T14:07:27.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

