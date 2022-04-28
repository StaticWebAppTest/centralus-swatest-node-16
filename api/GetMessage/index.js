module.exports = async function (context, req) {
  const date = "2022-04-28T10:16:15.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

