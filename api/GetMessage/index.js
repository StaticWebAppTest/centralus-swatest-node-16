module.exports = async function (context, req) {
  const date = "2022-07-01T22:09:59.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

