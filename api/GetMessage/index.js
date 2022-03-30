module.exports = async function (context, req) {
  const date = "2022-03-30T21:09:32.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

