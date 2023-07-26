module.exports = async function (context, req) {
  const date = "2023-07-26T00:53:08.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

