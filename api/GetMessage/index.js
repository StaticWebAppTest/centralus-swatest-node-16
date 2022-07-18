module.exports = async function (context, req) {
  const date = "2022-07-18T06:15:14.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

