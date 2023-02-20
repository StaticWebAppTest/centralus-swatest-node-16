module.exports = async function (context, req) {
  const date = "2023-02-20T15:10:23.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

