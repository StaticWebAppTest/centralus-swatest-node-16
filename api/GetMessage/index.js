module.exports = async function (context, req) {
  const date = "2022-10-12T13:50:16.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

