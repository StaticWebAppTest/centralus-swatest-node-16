module.exports = async function (context, req) {
  const date = "2022-03-28T14:10:05.772Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

