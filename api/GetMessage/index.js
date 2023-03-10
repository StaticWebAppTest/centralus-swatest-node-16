module.exports = async function (context, req) {
  const date = "2023-03-10T05:09:55.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

