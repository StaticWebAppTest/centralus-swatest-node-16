module.exports = async function (context, req) {
  const date = "2022-04-07T05:09:47.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

