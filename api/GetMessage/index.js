module.exports = async function (context, req) {
  const date = "2022-07-17T18:12:09.360Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

