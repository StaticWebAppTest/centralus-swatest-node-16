module.exports = async function (context, req) {
  const date = "2022-08-27T15:11:03.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

