module.exports = async function (context, req) {
  const date = "2022-03-24T06:13:15.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

