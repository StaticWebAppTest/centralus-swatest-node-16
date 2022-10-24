module.exports = async function (context, req) {
  const date = "2022-10-24T17:30:45.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

