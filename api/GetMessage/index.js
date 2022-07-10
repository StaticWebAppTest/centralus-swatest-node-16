module.exports = async function (context, req) {
  const date = "2022-07-10T15:10:48.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

