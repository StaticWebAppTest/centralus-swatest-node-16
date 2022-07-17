module.exports = async function (context, req) {
  const date = "2022-07-17T08:12:39.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

