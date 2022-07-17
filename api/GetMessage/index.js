module.exports = async function (context, req) {
  const date = "2022-07-17T06:13:07.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

