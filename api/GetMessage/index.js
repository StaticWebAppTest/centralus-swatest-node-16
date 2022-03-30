module.exports = async function (context, req) {
  const date = "2022-03-30T02:28:19.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

