module.exports = async function (context, req) {
  const date = "2022-07-18T19:08:34.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

