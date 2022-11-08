module.exports = async function (context, req) {
  const date = "2022-11-08T14:15:07.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

