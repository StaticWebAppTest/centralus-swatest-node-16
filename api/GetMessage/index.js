module.exports = async function (context, req) {
  const date = "2023-11-22T11:08:01.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

