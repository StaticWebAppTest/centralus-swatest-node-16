module.exports = async function (context, req) {
  const date = "2022-07-01T03:50:02.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

