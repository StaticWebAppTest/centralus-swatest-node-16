module.exports = async function (context, req) {
  const date = "2022-12-22T09:09:16.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

