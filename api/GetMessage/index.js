module.exports = async function (context, req) {
  const date = "2023-07-24T00:53:30.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

