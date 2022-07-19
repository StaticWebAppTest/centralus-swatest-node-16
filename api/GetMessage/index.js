module.exports = async function (context, req) {
  const date = "2022-07-19T13:35:18.074Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

