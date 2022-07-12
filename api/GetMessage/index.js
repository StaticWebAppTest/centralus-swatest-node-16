module.exports = async function (context, req) {
  const date = "2022-07-12T06:13:34.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

