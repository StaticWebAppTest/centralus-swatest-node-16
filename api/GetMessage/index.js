module.exports = async function (context, req) {
  const date = "2022-06-23T14:09:26.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

