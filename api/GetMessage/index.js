module.exports = async function (context, req) {
  const date = "2022-08-25T20:12:10.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

