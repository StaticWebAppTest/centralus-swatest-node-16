module.exports = async function (context, req) {
  const date = "2022-12-20T21:08:32.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

