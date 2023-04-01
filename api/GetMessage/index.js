module.exports = async function (context, req) {
  const date = "2023-04-01T13:09:30.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

