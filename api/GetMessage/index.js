module.exports = async function (context, req) {
  const date = "2023-05-06T03:09:01.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

