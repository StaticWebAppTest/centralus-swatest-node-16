module.exports = async function (context, req) {
  const date = "2022-11-22T03:06:09.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

