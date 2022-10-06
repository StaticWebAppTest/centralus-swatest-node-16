module.exports = async function (context, req) {
  const date = "2022-10-06T22:13:09.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

