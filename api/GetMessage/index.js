module.exports = async function (context, req) {
  const date = "2022-10-28T22:12:15.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

