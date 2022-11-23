module.exports = async function (context, req) {
  const date = "2022-11-23T23:10:08.637Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

