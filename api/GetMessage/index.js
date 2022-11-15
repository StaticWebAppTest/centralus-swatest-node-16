module.exports = async function (context, req) {
  const date = "2022-11-15T08:14:36.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

