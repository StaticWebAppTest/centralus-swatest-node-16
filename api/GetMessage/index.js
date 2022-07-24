module.exports = async function (context, req) {
  const date = "2022-07-24T19:09:06.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

