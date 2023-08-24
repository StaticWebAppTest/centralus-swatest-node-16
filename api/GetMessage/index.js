module.exports = async function (context, req) {
  const date = "2023-08-24T06:11:09.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

