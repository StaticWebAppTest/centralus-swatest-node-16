module.exports = async function (context, req) {
  const date = "2022-03-16T12:17:05.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

