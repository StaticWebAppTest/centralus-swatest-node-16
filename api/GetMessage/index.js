module.exports = async function (context, req) {
  const date = "2023-09-10T04:09:56.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

