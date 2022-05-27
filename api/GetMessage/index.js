module.exports = async function (context, req) {
  const date = "2022-05-27T04:25:45.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

