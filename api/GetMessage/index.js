module.exports = async function (context, req) {
  const date = "2022-10-16T04:09:58.629Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

