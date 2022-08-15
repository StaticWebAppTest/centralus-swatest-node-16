module.exports = async function (context, req) {
  const date = "2022-08-15T09:11:24.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

