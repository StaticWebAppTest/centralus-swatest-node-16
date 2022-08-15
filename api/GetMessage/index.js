module.exports = async function (context, req) {
  const date = "2022-08-15T07:09:55.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

