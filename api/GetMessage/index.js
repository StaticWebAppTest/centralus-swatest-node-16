module.exports = async function (context, req) {
  const date = "2022-08-27T11:09:33.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

