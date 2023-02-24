module.exports = async function (context, req) {
  const date = "2023-02-24T13:19:22.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

