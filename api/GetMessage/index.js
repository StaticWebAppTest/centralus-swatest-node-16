module.exports = async function (context, req) {
  const date = "2022-08-20T13:22:23.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

