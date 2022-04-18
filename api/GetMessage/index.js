module.exports = async function (context, req) {
  const date = "2022-04-18T16:15:39.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

