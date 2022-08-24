module.exports = async function (context, req) {
  const date = "2022-08-24T09:10:51.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

