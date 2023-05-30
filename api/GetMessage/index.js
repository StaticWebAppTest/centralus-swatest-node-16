module.exports = async function (context, req) {
  const date = "2023-05-30T20:09:04.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

