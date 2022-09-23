module.exports = async function (context, req) {
  const date = "2022-09-23T21:11:15.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

