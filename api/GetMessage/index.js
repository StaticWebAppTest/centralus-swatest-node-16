module.exports = async function (context, req) {
  const date = "2022-07-21T11:09:15.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

