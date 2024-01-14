module.exports = async function (context, req) {
  const date = "2024-01-14T11:07:10.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

