module.exports = async function (context, req) {
  const date = "2022-08-22T14:09:57.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

