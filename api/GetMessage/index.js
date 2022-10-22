module.exports = async function (context, req) {
  const date = "2022-10-22T15:13:00.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

