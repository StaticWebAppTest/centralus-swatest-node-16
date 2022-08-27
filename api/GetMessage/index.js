module.exports = async function (context, req) {
  const date = "2022-08-27T14:09:37.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

