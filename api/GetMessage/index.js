module.exports = async function (context, req) {
  const date = "2022-08-24T04:02:06.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

