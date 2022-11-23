module.exports = async function (context, req) {
  const date = "2022-11-23T06:13:13.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

