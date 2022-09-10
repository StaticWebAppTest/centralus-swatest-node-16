module.exports = async function (context, req) {
  const date = "2022-09-10T11:10:14.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

