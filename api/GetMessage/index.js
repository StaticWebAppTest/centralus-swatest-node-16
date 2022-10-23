module.exports = async function (context, req) {
  const date = "2022-10-23T20:14:03.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

