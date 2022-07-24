module.exports = async function (context, req) {
  const date = "2022-07-24T09:10:26.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

