module.exports = async function (context, req) {
  const date = "2022-03-23T09:10:05.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

