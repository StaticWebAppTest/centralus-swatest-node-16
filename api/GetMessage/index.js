module.exports = async function (context, req) {
  const date = "2023-02-24T14:09:25.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

