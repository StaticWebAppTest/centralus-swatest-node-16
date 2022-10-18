module.exports = async function (context, req) {
  const date = "2022-10-18T20:14:30.105Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

