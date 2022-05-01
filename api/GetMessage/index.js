module.exports = async function (context, req) {
  const date = "2022-05-01T14:10:21.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

