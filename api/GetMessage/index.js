module.exports = async function (context, req) {
  const date = "2023-11-24T06:12:19.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

