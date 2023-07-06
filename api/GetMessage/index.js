module.exports = async function (context, req) {
  const date = "2023-07-06T02:56:08.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

