module.exports = async function (context, req) {
  const date = "2022-08-31T09:11:45.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

