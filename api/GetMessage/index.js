module.exports = async function (context, req) {
  const date = "2023-04-18T19:07:32.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

