module.exports = async function (context, req) {
  const date = "2022-10-10T17:33:03.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

